import React, { FormEvent, useCallback, useState } from 'react';
import api from '../../services/api';
import { format } from '../../services/date';

import { Container, Repo } from './styles';

interface IRepo {
    id: number;
    name: string;
    full_name: string;
    description?: string;
    html_url: string;
    created_at: string;
    updated_at: string;
    pushed_at: string;
    stargazers_count: number;
    watchers_count: number;
    language: string;
    topics: string[];
}

const Home: React.FC = () => {
    const [username, setUsername] = useState('');
    const [loading, setLoading] = useState(false);
    const [repos, setRepos] = useState<IRepo[]>([]);
    const [error, setError] = useState(false);

    const fetchRepos = useCallback(() => {
        setLoading(true);
        setRepos([]);
        setError(false);

        api.get<IRepo[]>(`/users/${username}/repos`)
            .then(response => {
                console.log(response.data);
                setRepos(response.data.sort(function(a, b) {
                    const x = a.created_at;
                    const y = b.created_at;

                    return ((x < y) ? 1 : ((x > y) ? -1 : 0));
                }));
            })
            .catch(error => {
                setError(true);
            })
            .finally(() => setLoading(false));
    }, [username]);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        fetchRepos();
    }

    return (
        <Container>
            <h1>Github Timeline</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={e => setUsername(e.target.value)} />
                <button type="submit">Buscar</button>
            </form>
            
            {loading && <span>loading...</span>}

            <div className="repos-wrapper">
                {repos.map(repo => (
                    <Repo key={repo.id} href={repo.html_url} target="_blank">
                        <h2>{repo.name}</h2>
                        <div className="date">{format(new Date(repo.created_at))}</div>
                    </Repo>
                ))}
            </div>

            {error && <div className="error">User not found</div>}
        </Container>
    );
}

export default Home;
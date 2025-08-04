import { useState, useEffect, useMemo } from "react";

export const useUsers = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loadingMore, setLoadingMore] = useState(false);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);

    const fetchUsers = async (pageNum) => {
        if (pageNum > 1) {
            setLoadingMore(true);
        } else {
            setLoading(true);
        }
        setError(null);

        try {
            const response = await fetch(`https://randomuser.me/api/?results=10&page=${pageNum}&seed=abc`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setUsers(prevUsers => pageNum === 1 ? data.results : [...prevUsers, ...data.results]);
        } catch (err) {
            setError('Failed to fetch users. Please try again later.');
            console.error("Fetching users failed:", err);
        } finally {
            setLoading(false);
            setLoadingMore(false);
        }
    };

    useEffect(() => {
        fetchUsers(page);
    }, [page]);
    
    const loadMoreUsers = () => {
        setPage(prevPage => prevPage + 1);
    };

    return { users, loading, loadingMore, error, loadMoreUsers };
};



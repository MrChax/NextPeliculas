"use client";
import React, { useState, useEffect } from "react";
import UserList from "./UserList";
import Loading from "./Loading";

export default function UserPage() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchTotalPages = async () => {
      try {
        const response = await fetch("https://mflixbackend.azurewebsites.net/api/movies");
        const data = await response.json();
        const totalPages = Math.ceil(data.length / 12);
        setTotalPages(totalPages);
      } catch (error) {
        console.error(error);
      }
    };
    
    fetchTotalPages();
  }, []);
  
  useEffect(() => {
    if(totalPages > 0){
      fetchUsers();
    }
  }, [page, totalPages]);

  const fetchUsers = () => {
    const cachedData = localStorage.getItem(`usersPage${page}`);
    
    if (cachedData) {
      setUsers(JSON.parse(cachedData));
    } else {
      fetch(`https://mflixbackend.azurewebsites.net/api/movies?pageSize=12&page=${page}`)
        .then((response) => response.json())
        .then((data) => {
          localStorage.setItem(`usersPage${page}`, JSON.stringify(data));
          setUsers(data);
        })
        .catch((error) => console.error(error));
    }
  };

  const changePage = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  return (
    <>
      {totalPages === 0 ? (
        <Loading />
      ) : (
        <>
          <UserList Users={users} />
          <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
            <button onClick={() => changePage(page - 1)} disabled={page === 1} className="relative inline-flex items-center rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
              Previous
            </button>
            <div>
              <p className="text-sm text-gray-700">
                Showing <span className="font-medium">{((page - 1) * 12) + 1}</span> to <span className="font-medium">{page * 12}</span> of{' '}
                <span className="font-medium">{totalPages * 12}</span> results
              </p>
            </div>
            <button onClick={() => changePage(page + 1)} disabled={page === totalPages} className="relative inline-flex items-center rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
              Next
            </button>
          </div>
        </>
      )}
    </>
  );
}

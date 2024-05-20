"use client";

import React, { useEffect, useState } from "react";
import UserList from "./UserList";
import Loading from "./Loading";
import Paginado from "./Paginado/Paginado";

export default function UsersPage(){
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);
    const [totalUsers, setTotalUsers] = useState(0);
    const [pageSize, setPageSize] = useState(10);
    const [registroInicial, setRegistroInicial] = useState(1);
    const [registroFinal, setRegistroFinal] = useState(pageSize);
    const [paginas, setPaginas] = useState([1,2,3,4,5,6,7,8,9,10]);
    const [totalPages, setTotalPages] = useState(0)



    const setPageNav = (pagina) => {
        setPage(pagina);
        setRegistroInicial(pagina * pageSize - pageSize + 1);
        setRegistroFinal(pagina * pageSize);
    }

    const siguientePagina = () => {
        console.log(page, Math.ceil(totalUsers / pageSize));
        if(page < Math.ceil(totalUsers / pageSize))
        {
            setPage(page + 1);
            if(page % 10 === 0){
                setPaginas(paginas.map((pagina) => pagina + 10));
            }
            setRegistroInicial(registroInicial + pageSize);
            setRegistroFinal(registroFinal + pageSize);
        }
    }

    const anteriorPagina = () => {
        if(page > 1){
            setPage(page - 1);
            if(page % 10 === 1){
                setPaginas(paginas.map((pagina) => pagina - 10));
            }
            setRegistroInicial(registroInicial - pageSize);
            setRegistroFinal(registroFinal - pageSize);
        }
    }


    const urlTotal = "https://mflixbackend.azurewebsites.net/api/movies";
    useEffect(() => {
        fetch(urlTotal)
        .then((response) => response.json())
        .then((data) => {
            setTotalUsers(data.length);
            if(data.length % pageSize !== 0)
                setTotalPages(parseInt(data.length / pageSize));
            else
                setTotalPages(data.length / pageSize);
        }).catch((error) => console.error(error));
    },[]);

    const url = `${urlTotal}?page=${page}&pageSize=${pageSize}`;
    useEffect(() => {
            fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setUsers(data);
            }).catch((error) => console.error(error));
    },[page]);


  return (
    <>
        {users.length === 0 || totalUsers === 0? (
            <Loading/>
        ) : (
            <>
                <UserList Users={users} />
                <Paginado paginaActiva={page}  siguientePagina = {siguientePagina} anteriorPagina = {anteriorPagina} totalUsers={totalUsers} registroFinal={registroFinal} registroInicial={registroInicial} paginasMostrables={paginas} setPage={setPageNav}/>
            </>
        )}
    </>
  );
}
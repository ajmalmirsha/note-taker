import React, { useState } from "react";
import { Paginator } from 'primereact/paginator';


export default function Pagination ({onPageChange,first,rows,count}:PaginationProps) {
        return (
            <div className="card">
                <Paginator first={first} rows={rows} totalRecords={count} onPageChange={onPageChange} />
            </div>
        );
}
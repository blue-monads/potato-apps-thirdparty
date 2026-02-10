import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from 'react-router';
import { BASE_PATH } from "../../lib/base";
import { useModal } from "../../lib/shared/modal/modal";


const Table = () => {

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Excalidraw</h1>
            <p className="mb-4">This is the Excalidraw page. You can integrate Excalidraw here.</p>
            <a href="https://excalidraw.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                Go to Excalidraw
            </a>
        </div>
    )
}




export default Table;

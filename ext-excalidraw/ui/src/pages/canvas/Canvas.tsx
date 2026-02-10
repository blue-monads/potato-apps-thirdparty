// import { useState, useEffect } from "react";
// import { Link, useParams, useNavigate } from 'react-router';
// import { BASE_PATH } from "../../lib/base";
// import { useModal } from "../../lib/shared/modal/modal";
import { Excalidraw } from "@excalidraw/excalidraw"


const Canvas = () => {

    return (
        <div className="p-4 min-h-screen h-[500px]">
            <Excalidraw
            theme="light"
            
            />

        </div>
    )
}




export default Canvas;

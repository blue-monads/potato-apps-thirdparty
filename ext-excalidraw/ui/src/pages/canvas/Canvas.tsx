// import { useState, useEffect } from "react";
// import { Link, useParams, useNavigate } from 'react-router';
// import { BASE_PATH } from "../../lib/base";
// import { useModal } from "../../lib/shared/modal/modal";
import { Excalidraw } from "@excalidraw/excalidraw"


const Canvas = () => {

    return (
        <div className="p-4">
            <Excalidraw
            theme="light"
            viewModeEnabled={true}
            
            />

        </div>
    )
}




export default Canvas;

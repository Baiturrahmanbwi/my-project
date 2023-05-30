import { useEffect, useState } from "react";
import { supabase } from '../../../featured/supabase/supabase-client';

const FotoTakmir = ({foto}) => {
    const [fototakmir, setFotoTakmir] = useState();
    
    useEffect(
        () => {
            if(foto) downloadFoto(foto)
        },
        [foto]
    )
    
    const downloadFoto = async (path) => {
        try{
            const { data,error } = await supabase.storage
                .from('foto-takmir')
                .download(path);
            if (error){
                throw error;
            }

            const url = URL.createObjectURL(data);
            setFotoTakmir(url)
        }
        catch(error){
            console.log('Error downloading this file: ', error.message)
        }
    }
    return fototakmir ? (
        <center>
            <img src={fototakmir} width='75' height='75' className="rounded-circle"/>
        </center>
    ) : (
            <div>
                Loading Foto...
            </div>
    )
}

export default FotoTakmir;
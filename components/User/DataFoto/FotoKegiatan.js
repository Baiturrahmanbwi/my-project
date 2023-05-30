import { useEffect, useState } from "react";
import { supabase } from '../../../featured/supabase/supabase-client';

const FotoKegiatan = ({foto}) => {
    const [fotokegiatan, setFotoKegiatan] = useState();
    
    useEffect(
        () => {
            if(foto) downloadFoto(foto)
        },
        [foto]
    )
    
    const downloadFoto = async (path) => {
        try{
            const { data,error } = await supabase.storage
                .from('foto-kegiatan')
                .download(path);
            if (error){
                throw error;
            }

            const url = URL.createObjectURL(data);
            setFotoKegiatan(url)
        }
        catch(error){
            console.log('Error downloading this file: ', error.message)
        }
    }
    return FotoKegiatan ? (
        <center>
            <img src={fotokegiatan} className="card-img-top" style={{ width: '17rem', height: '9rem' }} />
        </center>
    ) : (
            <div>
                Loading Foto...
            </div>
    )
}

export default FotoKegiatan;
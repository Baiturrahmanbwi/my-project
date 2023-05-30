import TabelKegiatan from "./DataKegiatan";
import TabelHeaderKegiatan from "./TabelHeaderKegiatan";

const LayoutKegiatan = () => {
    return (
        <>
            <div className="container-xl">
                <div className="table-responsive d-flex flex-column">
                    <div className="table-wrapper">
                        <TabelHeaderKegiatan />
                        <TabelKegiatan />
                    </div>
                </div>
            </div>
        </>
    );
}

export default LayoutKegiatan;
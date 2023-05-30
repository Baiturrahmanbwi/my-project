import TabelHeaderTakmir from "./TabelHeaderTakmir";
import TabelTakmir from "./TabelDataTakmir";

const LayoutTakmir = () => {
    return (
        <>
            <div className="container-xl">
                <div className="table-responsive d-flex flex-column">
                    <div className="table-wrapper">
                        <TabelHeaderTakmir />
                        <TabelTakmir />
                    </div>
                </div>
            </div>
        </>
    );
}

export default LayoutTakmir;
import DashboardAdmin from '../../components/Admin/Dashboard';
import LayoutAdmin from '../../components/Admin/LayoutAdmin'
import LayoutTakmir from '../../components/Admin/PengurusTakmir/LayoutTakmir';


const Pengurus_Takmir = () => {
    return (
        <>
            <LayoutAdmin>
                <DashboardAdmin/>
                <LayoutTakmir />
            </LayoutAdmin>
        </>
    );
}

export default Pengurus_Takmir;

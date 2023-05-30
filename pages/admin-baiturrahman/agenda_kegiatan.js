import LayoutKegiatan from "../../components/Admin/AgendaKegiatan/LayoutKegiatan";
import DashboardAdmin from "../../components/Admin/Dashboard";
import LayoutAdmin from '../../components/Admin/LayoutAdmin'

const Agenda_Kegiatan = () => {
    return (
        <>
            <LayoutAdmin>
                <DashboardAdmin/>
                <LayoutKegiatan />
            </LayoutAdmin>
        </>
    );
}

export default Agenda_Kegiatan;
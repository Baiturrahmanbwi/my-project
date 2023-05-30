import LayoutDetail_Kegiatan from "../../../components/User/DetailKegiatan/LayoutDetail";
import LayoutUser from "../../../components/User/Layout";

export async function getServerSideProps(context) {
    return { props: { id: context.params.id } };
}


const DetailKegiatan = (props) => {
    return (
        <>
            <LayoutUser>
                <LayoutDetail_Kegiatan id={props.id} />
            </LayoutUser>
        </>
    );
}

export default DetailKegiatan;
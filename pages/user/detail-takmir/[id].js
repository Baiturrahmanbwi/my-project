import Link from "next/link";
// import LayoutDetail_Takmir from "../../../components/User/DetailTakmir/LayoutDetail";
// import BodyDetailTakmir from "../../../components/User/DetailTakmir/bodyDetail";
import LayoutDetail_Takmir from "../../../components/User/DetailTakmir/LayoutDetail";
import LayoutUser from "../../../components/User/Layout";

export async function getServerSideProps(context) {
    return { props: { id: context.params.id } };
}


const Detail = (props) => {
    return (
        <>
            <LayoutUser>
                <LayoutDetail_Takmir id={props.id} />
            </LayoutUser>
        </>
    );
}

export default Detail;
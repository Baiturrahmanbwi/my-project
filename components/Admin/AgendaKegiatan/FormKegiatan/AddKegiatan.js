import { Formik, Form, Field } from "formik";
import { supabase } from "../../../../featured/supabase/supabase-client";

const initFormValues = {
    title: "",
    waktu_mulai: "",
    waktu_selesai: "",
    lokasi: "",
    deskripsi: "",
    tanggal_kegiatan: "",
    fotokegiatan: null
}

const uploadFotoKegiatan = async (foto) => {
    try {
        const fileExt = foto.name.split('.').pop();
        const fileName = `${Math.random()}.${fileExt}`;
        const filePath = `${fileName}`;
        let { error: uploadError } = await supabase.storage
            .from('foto-kegiatan')
            .upload(filePath, foto);
        if (uploadError) {
            throw uploadError;
        } else {
            return filePath;
        }
    } catch (error) {
        alert(error.message);
    }
}

const handleAddSubmit = async (values) => {
    let url = '/api/kegiatans/addKegiatans';

    values.fotoPath = await uploadFotoKegiatan(values.foto);

    const respon = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(values)
    });

    let status = await respon.json();

    if (status != null) {
        location.reload()
    }
}

const AddKegiatan = () => {
    return (
        <>
            <Formik initialValues={initFormValues} onSubmit={handleAddSubmit}>
                {({ isSubmitting, setFieldValue }) => (
                    <Form className="mb-4">
                    <div className='row g-3'>
                        <div className='col-sm-9'>
                            <label>Judul Kegiatan</label>
                            <Field type='text' className='form-control'
                                name='title' />
                        </div>
                        <div className='col-sm-3'>
                            <label>Tanggal</label>
                            <Field type='date' className='form-control'
                                name='tanggal_kegiatan' />
                        </div>
                    </div>
                    <div className='row g-3 mt-2'>
                        <div className='col-sm-2'>
                            <label>Waktu Mulai</label>
                            <Field type='text' name='waktu_mulai' className='form-control'/>
                        </div>
                        <div className='col-sm-2'>
                            <label>Waktu Selesai</label>
                            <Field type='text' name='waktu_selesai' className='form-control'/>
                        </div>
                        <div className='col-sm-8'>
                            <label>Lokasi</label>
                            <Field type='text' name='lokasi' className='form-control' />
                        </div>
                        <div className='col-sm-9'>
                            <label>Deskripsi</label>
                            <Field as='textarea' name='deskripsi' className='form-control'/>
                        </div>
                        <div className='col-sm-3'>
                            <label>Foto</label>
                            <input type='file' name='foto' className='form-control' accept='image/png, image/jpg, image/jpeg' onChange={(event) => {
                                setFieldValue('foto', event.currentTarget.files[0]);
                            }} />
                        </div>
                    </div>
                    <div className='row g-3 mt-2'>
                        <div className='col-sm-12'>
                            <button type='submit' className='w-100 btn btn-primary rounded-lg' disabled={isSubmitting}>
                                Tambah Data
                            </button>
                        </div>
                    </div>
                </Form>
                )}
            </Formik>
        </>
    );
}

export default AddKegiatan;
import { Formik, Form, Field } from 'formik';
import { supabase } from '../../../../featured/supabase/supabase-client';

const initFormValues = {
    nama: '',
    tanggal_lahir: '',
    alamat: '',
    jabatan: '',    
    foto: null
}

const uploadFotoTakmir = async (foto) => {
    try {
        const fileExt = foto.name.split('.').pop();
        const fileName = `${Math.random()}.${fileExt}`;
        const filePath = `${fileName}`;
        let { error: uploadError } = await supabase.storage
            .from('foto-takmir')
            .upload(filePath, foto);
        if (uploadError) {
            throw uploadError;
        } else {
            return filePath;
        }
    } catch (error) {
        alert(error.message);
    }
};

const handleAddSubmit = async (values) => {
    let url = '/api/takmirs/addDataTakmirs';

    values.fotoPath = await uploadFotoTakmir(values.foto);

    const respon = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(values)
    });

    let status = await respon.json();

    if (status != null) {
        location.reload()
    }
}

const AddTakmir = () => {
    return (
        <>
            <Formik initialValues={initFormValues} onSubmit={handleAddSubmit}>
                {({ isSubmitting, setFieldValue }) => (
                    <Form>
                        <div className='row g-3'>
                            <div className='col-sm-3'>
                                <label>Nama</label>
                                <Field type='text' className='form-control' name='nama' />
                            </div>
                            <div className='col-sm-3'>
                                <label>Tanggal Lahir</label>
                                <Field type='date' name='tanggal_lahir' className='form-control' />
                            </div>
                            <div className='col-sm-6'>
                                <label>Alamat</label>
                                <Field type='text' name='alamat' className='form-control' />
                            </div>
                        </div>
                        <div className='row g-3 mt-2'>
                            <div className='col-sm-3'>
                                <label>Jabatan</label>
                                <Field type='text' name='jabatan' className='form-control' />
                            </div>
                            <div className='col-sm-9'>
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

export default AddTakmir;
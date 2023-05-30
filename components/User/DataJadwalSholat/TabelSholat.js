import Data from "./Data";

const TabelSholat = ({jadwalsholats}) => {
    
    const jadwalsholatGenerator = () => {
        return (
            <>
                {
                    jadwalsholats.map(jadwalsholat => {
                        return (
                            <Data key={jadwalsholat.id} jadwalsholat={jadwalsholat} />
                        )
                    })
                }
            </>
        )
    }
    
    return (
        <>
            <div className='table-responsive' style={{marginTop:"0.8rem"}}>
            <table className="table table-borderless" style={{backgroundColor:"#E3F6FF", borderRadius:"15px"}}>
                    <thead>
                        <tr className="text-center" style={{fontSize:"14px"}}>
                            <th>Tanggal</th>
                            <th>Imsyak</th>
                            <th>Subuh</th>
                            <th>Terbit</th>
                            <th>Dzuhur</th>
                            <th>Ashar</th>
                            <th>Maghrib</th>
                            <th>Isya</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jadwalsholatGenerator()}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default TabelSholat;
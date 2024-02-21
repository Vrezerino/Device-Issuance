

const DevicePage = ({ device }) => {
    return (
        <div className='devicePageDeviceContainer'>
            {device?.deviceNumber || 'empty'}
        </div>
    );
}

export default DevicePage;
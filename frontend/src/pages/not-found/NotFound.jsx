const NotFound = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
      }}
    >
      <div
        style={{
          color: '#000',
          fontSize: '30px',
          fontWeight: '700',
        }}
      >
        It looks like you are lost
      </div>
      <div
        style={{
          color: '#000',
          fontSize: '30px',
          fontWeight: '700',
        }}
      >
        Page Not Found !
      </div>
    </div>
  );
};

export default NotFound;

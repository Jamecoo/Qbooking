const Dot = ({ active }: { active: boolean }) => {
    return (
        <span
            style={{
                transition: '0.3s ease-in-out',
                height: '10px',
                width: '10px',
                borderRadius: '50%',
                backgroundColor: active ? 'black' : 'gray',
                cursor: 'pointer',
                display: 'inline-block',
                margin: '0 5px', // Adjust spacing between dots
                boxShadow: active ? '0 0 2px rgba(0, 0, 0, 0.5)' : 'none', // Add shadow for active dot
            }}
        />
    );
};

export default Dot;

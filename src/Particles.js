import Particles from 'react-particles-js';
import particlecnf from './particleconfig'
export default function ParticleBG({ children }) {
    return (
        <div style={{ position: 'relative' }}>
            <Particles
                params={particlecnf}
                style={{
                    position: 'absolute',
                    zIndex: 1,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    top: 0
                }}
            />
            {children && <div style={{ position: 'relative' }}>{children}</div>}
        </div>
    )
}

import { Nav } from '../UI';

import styles from './styles.module.scss';

export default function Header() {
    const linksString = [
        { name: 'About', id: 0 },
        { name: 'Discover', id: 1 },
        { name: 'Get Started', id: 2 },
    ];
    
    return (
        <header id={styles.header} role="header">
            <span id={styles.logo}>crowdfund</span>
            <div id={styles.links}>
                {
                    linksString.map(item => {
                        return (
                            <Nav key={item.id}>
                                {item.name}
                            </Nav>
                        )
                    })
                }
            </div>
        </header>
    );
}
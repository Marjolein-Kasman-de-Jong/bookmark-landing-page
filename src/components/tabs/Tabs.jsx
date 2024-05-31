import { BrowserRouter as Router, Route, Routes, NavLink, Navigate } from 'react-router-dom';

// Components
import Feature from '../feature/Feature';

// Images
import feature1 from '../../assets/illustration-features-tab-1.svg';
import feature2 from '../../assets/illustration-features-tab-2.svg';
import feature3 from '../../assets/illustration-features-tab-3.svg';

// Styles
import './tabs.css';

function Tabs() {
    return (
        <Router>
            <div>

                <nav className='tabs'>
                    <ul>
                        <li>
                            <NavLink
                                end to='/simple-bookmarking'
                                activeClassName='active'
                            >
                                simple bookmarking
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/speedy-searching'
                                activeClassName='active'
                            >
                                speedy searching
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/easy-sharing'
                                activeClassName='active'
                            >
                                easy sharing
                            </NavLink>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route
                        path='/simple-bookmarking'
                        element={<Feature
                            title='bookmark in one click'
                            text='Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.'
                            image={feature1}
                        />}
                    />
                    <Route
                        path='/speedy-searching'
                        element={<Feature
                            title='intelligent search'
                            text='Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.'
                            image={feature2}
                        />}
                    />
                    <Route
                        path='/easy-sharing'
                        element={<Feature
                            title='share your bookmarks'
                            text='Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.'
                            image={feature3}
                        />}
                    />
                    <Route 
                        path='*'
                        element={<Navigate to="/simple-bookmarking" replace />}
                    />
                </Routes>

            </div>
        </Router>
    );
}

export default Tabs;
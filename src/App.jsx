import React, { useContext, useState, useEffect } from 'react';
import NavBar from '../src/pages/Shared/NavBar/NavBar';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../src/pages/Shared/Footer/Footer';
import { AuthContext } from '../src/providers/AuthProvider';
import serverURL from '../src/serverConfig';

const calculateProfileCompletion = (profile) => {
    let completed = 0;
    const total = 5;
    if (profile?.name) completed++;
    if (profile?.email) completed++;
    if (profile?.contactNumber || profile?.phone) completed++;
    if (profile?.address) completed++;
    if (profile?.profileImg && !profile.profileImg.includes('res.cloudinary.com/demo')) completed++;
    return Math.round((completed / total) * 100);
};

const App = () => {
    const { user } = useContext(AuthContext);
    const location = useLocation();
    const [profileData, setProfileData] = useState(null);
    const [showProfilePopup, setShowProfilePopup] = useState(false);

    useEffect(() => {
        if (!user) {
            setProfileData(null);
            setShowProfilePopup(false);
            return;
        }

        // Only fetch and show popup on the home page ('/')
        if (location.pathname !== '/') {
            setShowProfilePopup(false);
            return;
        }

        const abortController = new AbortController();

        const fetchProfile = async () => {
            try {
                const token = localStorage.getItem('auth-token');
                if (!token) return;

                const response = await fetch(`${serverURL.url}auth/profile`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    },
                    signal: abortController.signal
                });

                if (response.ok) {
                    const result = await response.json();
                    if (result?.success && result?.data) {
                        const fetched = result.data;
                        setProfileData(fetched);

                        const completion = calculateProfileCompletion(fetched);
                        if (completion < 100) {
                            setShowProfilePopup(true);
                        }
                    }
                }
            } catch (error) {
                if (error.name !== 'AbortError') {
                    console.error('Error fetching profile:', error);
                }
            }
        };

        fetchProfile();

        return () => {
            abortController.abort();
        };
    }, [user, location.pathname]);

    const handleDismissPopup = () => {
        setShowProfilePopup(false);
    };

    const userRole = user?.role === 'user' ? 'buyer' : (user?.role || 'buyer');

    return (
        <div>
            <NavBar/>
            <Outlet/>
            <Footer/>

            {showProfilePopup && profileData && (
                <ProfileCompletionPopup
                    profileData={profileData}
                    userRole={userRole}
                    onDismiss={handleDismissPopup}
                />
            )}
        </div>
    );
};

export default App;

import React from 'react';
import { useImmer } from 'use-immer';

const UserProfileWithImmer = () => {
    const [userProfile, updateUserProfile] = useImmer({
        name: '',
        email: '',
        contactDetails: {
            phone: '',
            address: ''
        },
        preferences: {
            newsletter: false,
            notifications: false
        }
    });

    const updateContactDetails = (phone, address) => {
        updateUserProfile(draft => {
            draft.contactDetails.phone = phone;
            draft.contactDetails.address = address;
        });
    };

    const toggleNewsletterSubscription = () => {
        updateUserProfile(draft => {
            draft.preferences.newsletter = !draft.preferences.newsletter;
        });
    };

    return (
        <div>
            <h1>User Profile</h1>
            <div>
                <label>Name: </label>
                <input type="text" value={userProfile.name} onChange={(e) => updateUserProfile(draft => { draft.name = e.target.value })} />
            </div>
            <div>
                <label>Email: </label>
                <input type="email" value={userProfile.email} onChange={(e) => updateUserProfile(draft => { draft.email = e.target.value })} />
            </div>
            <div>
                <label>Phone: </label>
                <input type="text" value={userProfile.contactDetails.phone} onChange={(e) => updateContactDetails(e.target.value, userProfile.contactDetails.address)} />
            </div>
            <div>
                <label>Address: </label>
                <input type="text" value={userProfile.contactDetails.address} onChange={(e) => updateContactDetails(userProfile.contactDetails.phone, e.target.value)} />
            </div>
            <div>
                <label>Newsletter Subscription: </label>
                <button onClick={toggleNewsletterSubscription}>{userProfile.preferences.newsletter ? 'Unsubscribe' : 'Subscribe'}</button>
            </div>
            <div>
                <h2>Current Profile:</h2>
                <p>Name: {userProfile.name}</p>
                <p>Email: {userProfile.email}</p>
                <p>Phone: {userProfile.contactDetails.phone}</p>
                <p>Address: {userProfile.contactDetails.address}</p>
                <p>Newsletter Subscription: {userProfile.preferences.newsletter ? 'Subscribed' : 'Not Subscribed'}</p>
            </div>
        </div>
    );
};

export default UserProfileWithImmer;

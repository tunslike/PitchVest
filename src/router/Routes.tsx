import React from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import { Home } from '../pages/Landing';


const AppRoutes: React.FC = () => {
    return (
        <Routes>
            {/* Public pages */}
            <Route path="/" element={<Home />} />

            {/* Default fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    )
}

export default AppRoutes;
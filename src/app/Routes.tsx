import React, {ReactNode} from 'react';
import {Route, RouteProps, Routes as ReactRouterRoutes} from 'react-router-dom';
import About from '../pages/About';
import Home from '../pages/Home';
import MoreTools from '../pages/MoreTools';
import ErrorBoundary from './ErrorBoundary';

type NavRoute = {
	path: RouteProps['path'];
	element: RouteProps['element'];
	label?: ReactNode;
	rootPath?: RouteProps['path'];
}

export const useNavLinks = () => {
	const navLinks: NavRoute[] = [
		{
			path:    '/',
			element: <Home/>
		},
		{
			path:    '/about',
			label:   'About',
			element: <About/>
		},
		{
			path:    '/more-tools',
			label:   'More Tools',
			element: <MoreTools/>
		}
	];
	
	return navLinks;
};

const mapNavLinkToRoute = ({element, path}: NavRoute) => (
	<Route key="path" element={element} path={path}/>
);

export default function Routes() {
	const navLinks = useNavLinks();
	const routes   = navLinks.map(mapNavLinkToRoute);
	
	return (
		<ErrorBoundary>
			<ReactRouterRoutes>
				{routes}
			</ReactRouterRoutes>
		</ErrorBoundary>
	);
}
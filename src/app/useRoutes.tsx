import React, {ReactNode} from 'react';
import {RouteObject} from 'react-router-dom';
import About from '../pages/About';
import Home from '../pages/Home';
import MoreTools from '../pages/MoreTools';

type NavRoute = RouteObject & {
	label?: ReactNode;
}

export default function useNavLinks() {
	const navLinks: NavRoute[] = [
		{
			path:    '/',
			element: <Home/>,
			index:   true
		},
		{
			path:    'about',
			label:   'About',
			element: <About/>
		},
		{
			path:    'more-tools',
			label:   'More Tools',
			element: <MoreTools/>
		}
	];
	
	return navLinks;
};
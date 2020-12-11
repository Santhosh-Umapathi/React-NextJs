import React from 'react'
//NEXT Js Routing
import Link from 'next/link'
import Router from 'next/router'

const IndexPage = () => {
	return (
		<div>
			<h1>Main Page</h1>

			<Link href="/auth">
				<a>Auth Page</a>
			</Link>

			<button onClick = {() => Router.push('/auth')}>Go To Auth Page</button>
		</div>
	)
}

export default IndexPage;

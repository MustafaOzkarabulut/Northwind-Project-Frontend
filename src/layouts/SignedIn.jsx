import React from 'react'
import { Dropdown, Image, Menu } from 'semantic-ui-react'

export default function SignedIn({signOut}) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://vz.cnwimg.com/wp-content/uploads/2012/05/mark.jpg?x13500"></Image>
                <Dropdown pointing="top left" text="Mustafa">
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim" icon="info"/>
                        <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out"/>    
                        
                    </Dropdown.Menu>
                </Dropdown>
           </Menu.Item>
        </div>
    )
}

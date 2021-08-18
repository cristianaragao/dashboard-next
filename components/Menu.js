import { useRouter } from "next/router";


import { MdDashboard, MdSettings, MdHelp, MdAccountCircle } from "react-icons/md";
import { Icon } from "@chakra-ui/react"
import { Box, Flex, Text  } from "@chakra-ui/react"

import Typography from '@material-ui/core/Typography';
import { route } from "next/dist/server/router";



const menuOptions = [
    {
        label: 'Dashboard',
        icon: MdDashboard,
        pathname: '/dashboard',
        submenus: []
    },
    {
        label: 'Settings',
        icon: MdSettings,
        pathname: '/settings',
        submenus: [
            {
                label: 'Account',
                icon: MdAccountCircle,
                pathname: '/account'
            }
        ]
    },
    {
        label: 'Help',
        icon: MdHelp,
        pathname: '/help',
        submenus: []
    }
]

export default function Menu() {

    const router = useRouter()

    console.log("router ", router)

    return(
        <Box>
            {
                menuOptions.map((menu, index) => 

                    <Flex onClick={() => { router.push(menu.pathname) }} style={{ transitionDuration: '0.3s', color: menu.pathname === router.pathname ? '#4FD1C5' : '' }} w={250} m={4} key={index} alignItems="center" _hover={{ transform: 'translateX(5px)', cursor: 'pointer', }}>
                        <Box marginLeft={3} marginRight={3}>
                            <Icon as={menu.icon}  w={7} h={7}/>
                        </Box>
                        <Box>
                            <Typography style={{ marginTop: 10 }} variant="h6" gutterBottom>
                                <b>{menu.label}</b>
                            </Typography>
                        </Box>
                    </Flex>

                )
            }
        </Box>
    )

}

const style = {

}
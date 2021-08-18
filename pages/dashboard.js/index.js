import Base from '../../components/Base';

import ReactECharts from 'echarts-for-react';

import { Grid, GridItem } from "@chakra-ui/react"

export default function Dashboard(){

    const option = {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [150, 230, 224, 218, 135, 147, 260],
            type: 'line'
        }]
    };

    return(
        <Base>
            <Grid
                h="100vh"
                templateRows="repeat(2, 1fr)"
                templateColumns="repeat(4, 1fr)"
                gap={4}
                p={3}
            >

                <GridItem colSpan={2} bg="#EDF2F7">
                    <ReactECharts option={option} style={{ height: '100%', width: '100%' }}/>
                </GridItem>
                <GridItem colSpan={2} bg="#EDF2F7">
                    <ReactECharts option={option} style={{ height: '100%', width: '100%' }}/>
                </GridItem>
                <GridItem colSpan={4} bg="#EDF2F7">
                    <ReactECharts option={option} style={{ height: '100%', width: '100%' }}/>
                </GridItem>
            </Grid>
        </Base>
    )
}
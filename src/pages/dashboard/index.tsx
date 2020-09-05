import React from 'react'
import { TodoTable } from './../../components'
import styled from 'styled-components'

const Section = styled.div`
    width:auto;
    margin-left: -16px;
    margin-right: -16px;
    position: relative;
    background-color: white;
    margin-top: 32px;
    padding-top: 24px;
    padding-bottom: 24px;
    padding-left: 24px;
    padding-right: 24px;
    text-align: center

`;


export default function Dashboard() {
    return (
        <Section>
            <h1>
                To do list page
            </h1>
            <TodoTable />
        </Section>
    )
}
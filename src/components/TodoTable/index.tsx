import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { TextInput } from './../../components';
import ButtonComponent from '../Button';


const Table = styled.section`
    margin-left: auto;
    margin-right: auto;
    padding: 32px;
`;

const Header = styled.header`
    display: flex;
    justify-content: space-around;
`;

const Cell = styled.div`
    display: table-cell
`;

const Row = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px dotted black;
`;

const Actions = styled.div`
    display: flex;
    justify-content: start;
`
    ;

const Hr = styled.hr`
    height: 12px;
    border: 0;
    box-shadow: inset 0 12px 12px -12px rgba(0, 0, 0, 0.5);
`;

export default function TodoTable() {

    const [items, setItems] = useState<string[]>([])
    const [value, setValue] = useState('')
    const [buttonState, toggleButtonState] = useState(false)

    useEffect(() => {
        const localItems = JSON.parse(localStorage.getItem('items') || '{}')
        if (!(items.length === localItems.length && items.every((value, index) => value === localItems[index])) //Check if there's something to grab from local storage
        ) {
            setItems(localItems)
        }
    }, [items])

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e && e.preventDefault()
        const val = e.target.value
        setValue(val)
    }

    const handleButtonClick = () => {
        if (value !== "" && !items.includes(value)) {
            toggleButtonState(!buttonState)
            const result: string[] = [...items, value]
            localStorage.setItem('items', JSON.stringify(result))
            setItems(result)
            setValue("")
        }
    }

    const handleCompletedClick = (item: string) => {
        const result: string[] = items.filter((value, index, arr) => { return value !== item })
        localStorage.setItem('items', JSON.stringify(result))
        setItems(result)
    }

    return (
        <Table>
            <Header>
                <Cell>Task</Cell>
                <Cell>Completed</Cell>
            </Header>

            <Hr />

            {
                items.map((item, i) => {
                    return (
                        <Row>
                            <Cell>{item}</Cell>
                            <ButtonComponent onClick={() => handleCompletedClick(item)}> Finished </ButtonComponent>
                        </Row>
                    )
                })
            }

            <Hr />

            <Actions>
                <TextInput
                    id="add-stuff"
                    value={value}
                    label="Add another TO-DO item here"
                    onChange={onChange}
                />
                <ButtonComponent onClick={handleButtonClick}> Add </ButtonComponent>
            </Actions>
        </Table>
    )
}
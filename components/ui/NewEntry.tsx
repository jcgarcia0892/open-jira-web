import React, { ChangeEvent, useContext, useState } from 'react'
import { Box, Button, TextField } from '@mui/material'
import SavedOutlinedIcon from '@mui/icons-material/SaveOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined'
import { EntriesContext } from '@/context/entries';
import { UIContext } from '@/context/ui';

export const NewEntry = () => {

    const { addNewEntry } = useContext(EntriesContext);

    const { isAddingEntry, addEntry } = useContext(UIContext);

    // const [isAdding, setIsAdding] = useState(false);

    const [inputValue, setInputValue] = useState('');

    const [isTouched, setIsTouched] = useState(false);

    const onTextfieldChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    }

    const onSave = () => {
        if(inputValue.length === 0) return;
        addNewEntry(inputValue);
        addEntry(false);
        setIsTouched(false);
        setInputValue('');
    }

    return (
        <Box sx={{marginBottom: 2, paddingX: 2, }}>
            {
                isAddingEntry
                    ? (
                        <>
                            <TextField 
                                fullWidth
                                sx={{marginTop: 2, marginBottom: 1}}
                                placeholder='Nueva entrada'
                                autoFocus
                                multiline
                                label='Una nueva entrada'
                                helperText={(inputValue.length <= 0 && isTouched) && 'Ingrese un valor'}
                                value={inputValue}
                                error={inputValue.length <= 0 && isTouched}
                                onChange={onTextfieldChange}
                                onBlur={() => setIsTouched(true)}
                            />
                            <Box display='flex' justifyContent='space-between'>
                                <Button
                                    variant='text'
                                    onClick={() => addEntry(false)}
                                >
                                    Cancelar
                                </Button>
                                <Button
                                    variant='outlined'
                                    color='secondary'
                                    endIcon={<SavedOutlinedIcon />}  
                                    onClick={onSave}  
                                >
                                    Guardar
                                </Button>
                            </Box>
                        </>
                    )
                    : (
                        <>
                            <Button
                                startIcon={<AddCircleOutlineOutlinedIcon />}
                                fullWidth
                                variant='outlined'
                                onClick={() => addEntry(true)}
                            >
                                Agregar Tarea
                            </Button>
                        </>
                    )
            }

        </Box>
    )
}

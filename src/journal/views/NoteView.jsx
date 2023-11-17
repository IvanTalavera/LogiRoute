import { SaveOutlined } from '@mui/icons-material'
import { Button, Grid, TextField, Typography } from '@mui/material'
import React, { useEffect, useMemo, useState } from 'react'
import { useForm } from '../../hooks/useForm'
import { useDispatch, useSelector } from 'react-redux'
import { startSaveNote } from '../../store/journal/thunks'
import { setActiveNote } from '../../store/journal/journalSlice'
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.css';

export const NoteView = () => {
  
  const dispatch = useDispatch()
  const {active: note, savedMessage} = useSelector(state => state.journal);

  const{ body, title, onInputChange, formState, date, destinatarios, direcciones, articulos} = useForm(note);

  const dateString = useMemo(() => {
      const newDate = new Date(date)
      return newDate.toUTCString()
  },[date])

  useEffect(() => {
    dispatch(setActiveNote(formState))
  }, [formState])
  
  useEffect(() => {
    if(savedMessage.lenght>0) {
      Swal.fire('Nota actualizada', 'sucess')
    }
  }, [savedMessage])
  
  const onSavedNote = () => {
    dispatch(startSaveNote())
  }

  //CAMBIOS POR CHATGPT XD
  const [productData, setProductData] = useState(
    Array(10).fill().map(() => ({ article: '', address: '', recipient: '' }))
  );

  // Estados para los resultados
  const [resultArticles, setResultArticles] = useState([]);
  const [resultAddresses, setResultAddresses] = useState([]);
  const [resultRecipients, setResultRecipients] = useState([]);


  
  // Función para manejar los cambios en los campos de texto
  const handleInputChange = (index, field, value) => {
    const updatedProductData = [...productData];
    updatedProductData[index][field] = value;
    setProductData(updatedProductData);
  };

  // Función para guardar los datos en arreglos separados al hacer clic en el botón
  const handleSave = () => {
    const articles = productData.map((product) => product.article);
    const addresses = productData.map((product) => product.address);
    const recipients = productData.map((product) => product.recipient);

    setResultArticles(articles);
    setResultAddresses(addresses);
    setResultRecipients(recipients);
  };

  



  
  //FINNNNNN


  return (
    <Grid container direction='row' justifyContent='space-between' alignItems='center' sx={{mb:1}}>
        <Grid item>
            <Typography fontSize={39} fontWeight='light'>{dateString}</Typography>
        </Grid>
        <Grid item>
            <Typography fontSize={30} fontWeight='light'>Repartidor asignado: EG1977</Typography>
        </Grid>
        <Grid item>
          <Button
              onClick={onSavedNote}
              color='primary' 
              sx={{ padding:2}}
          >
            <SaveOutlined sx={{fontSize:30, mr:1}}/>
            Guardar
          </Button>
        </Grid>
        <Grid container>
          <TextField
              type='text'
              variant='filled'
              fullWidth
              placeholder='Nombre del pedido'
              multiline
              //TÍTULOOOOOOOOO
              label='Pedido'
              sx={{ border:'none', mb:1 }}
              name="title"
              value={title}
              onChange={onInputChange}
          />
          <TextField
              type='text'
              variant='filled'
              fullWidth
              multiline
              placeholder='Ingrese el artículo'
              label='Artículos'
              name= 'Artículos'
              value={ Object.values(resultArticles).join(', ')}
              /*
              value={articulos}
              */ 
              sx={{ border:'none', mb:1 }}
          />
          <TextField
              type='text'
              variant='filled'
              fullWidth
              multiline
              placeholder='Ingresa el destinatario'
              label='Nombre del Destinatario'
              sx={{ border:'none', mb:1 }}
              name="body"
              value={Object.values(resultRecipients).join(' ,')}
              /*
              value={destinatarios}
               */
              onChange={onInputChange}
          />
          <TextField
              type='text'
              variant='filled'
              fullWidth
              multiline
              placeholder='Ingresa la Dirección'
              label='Dirección de Envío'
              sx={{ border:'none', mb:1 }}
              name="body"
              value={Object.values(resultAddresses).join(' ,')}
              /*
              value={direcciones} 
              */
              onChange={onInputChange}
          />
        </Grid> 

        {/* EXTRA */}

        <Grid container direction="column" spacing={2}>
      {productData.map((product, index) => (
        <Grid key={index} container item direction="column">
          <Typography variant="h6">{`Producto ${index + 1}`}</Typography>
          <TextField
            label="Producto"
            variant="filled"
            value={product.article}
            onChange={(e) => handleInputChange(index, 'article', e.target.value)}
            fullWidth
          />
          <TextField
            label="Dirección"
            variant="filled"
            value={product.address}
            onChange={(e) => handleInputChange(index, 'address', e.target.value)}
            fullWidth
          />
          <TextField
            label="Destinatario"
            variant="filled"
            value={product.recipient}
            onChange={(e) => handleInputChange(index, 'recipient', e.target.value)}
            fullWidth
          />
        </Grid>
      ))}
      <Button 
          variant="contained" 
          color="primary" 
          onClick={handleSave}
          sx={{mt:1}}
                >
        Confirmar orden
      </Button>
      <div>
        <strong>Productos:</strong>
        <pre>{JSON.stringify(resultArticles, null, 2)}</pre>
        
      </div>
      <div>
        <strong>Direcciones:</strong>
        <pre>{JSON.stringify(resultAddresses, null, 2)}</pre>
        
      </div>
      <div>
        <strong>Destinatarios:</strong>
        <pre>{JSON.stringify(resultRecipients, null, 2)}</pre>
        
      </div>
    </Grid>


    </Grid>


    
  )
}

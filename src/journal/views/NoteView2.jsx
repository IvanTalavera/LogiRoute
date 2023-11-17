import { SaveOutlined } from '@mui/icons-material'
import { Button, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import {useForm} from '../../hooks/useForm'
import { useSelector } from 'react-redux'
import { NothingSV } from './NothingSV'

export const NoteView = () => {

  const { active: note } = useSelector((state) => state.journal);
  const {} = useForm(note);

  // Estado para los productos
  const [productData, setProductData] = useState(
    Array(10).fill().map(() => ({ article: '', address: '' , destination: ''}))
  );

  // Estados para los resultados
  const [resultArticles, setResultArticles] = useState('');
  const [resultAddresses, setResultAddresses] = useState('');
  const [resultDestinations, setResultDestinations] = useState('');


  // Función para manejar los cambios en los campos de texto
  const handleInputChange = (index, field, value) => {
    const updatedProductData = [...productData];
    updatedProductData[index][field] = value;
    setProductData(updatedProductData);
  };

  // Función para concatenar los resultados
    const handleConcatenate = () => {
    const articles = productData.map((product) => product.article).join('\n');
    const addresses = productData.map((product) => product.address).join('\n');
    const destinations = productData.map((product) => product.destination).join('\n');
    setResultArticles(articles);
    setResultAddresses(addresses);
    setResultDestinations(destinations);
  };
  //Ocultar el formulario Original


  // Función para publicar (puedes personalizar según tus necesidades)
  const handlePublish = () => {
    // Aquí puedes hacer lo que necesitas con los resultados (resultArticles y resultAddresses)
    console.log('Artículos:', resultArticles);
    console.log('Direcciones:', resultAddresses);
    console.log('Destinatarios:', resultDestinations);
    // Puedes realizar acciones adicionales aquí, como enviar los datos al servidor, etc.
  };

  return (
    <Grid container direction="column" justifyContent="space-between" alignItems="center" sx={{ mb: 1 }}>
      <Grid item>
        <Typography fontSize={39} fontWeight="light">
          PEDIDOS 16/11/23
        </Typography>
      </Grid>
      <Grid item>
          <Button color='primary' sx={{ padding:2}}>
            <SaveOutlined sx={{fontSize:30, mr:1}}/>
            Guardar
          </Button>
        </Grid>
      <Grid container>
        {/* Renderizar los campos de texto para cada producto */}
        {productData.map((product, index) => (
        <Grid key={index} container direction="column" sx={{ mb: 2 }}>
          <Typography fontSize={20} fontWeight="light">{`Producto ${index + 1}`}</Typography>
          <TextField
            type="text"
            variant="filled"
            fullWidth
            placeholder="Ingresa el Destinatario"
            label="Destinatario"
            value={product.destination}
            onChange={(e) => handleInputChange(index, 'destination', e.target.value)}
            sx={{ border: 'none', mb: 1 }}
          />
          <TextField
            type="text"
            variant="filled"
            fullWidth
            placeholder="Ingrese el artículo"
            label="Artículo"
            value={product.article}
            onChange={(e) => handleInputChange(index, 'article', e.target.value)}
            sx={{ border: 'none', mb: 1 }}
          />
          <TextField
            type="text"
            variant="filled"
            fullWidth
            multiline
            placeholder="Ingresa una dirección"
            label="Dirección"
            value={product.address}
            onChange={(e) => handleInputChange(index, 'address', e.target.value)}
            sx={{ border: 'none', mb: 1 }}
          />
        </Grid>
      ))}
      </Grid>

        <Button variant="contained" color="primary" onClick={handleConcatenate} sx={{ padding: 2, mt: 2 }}>
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Concatenar
        </Button>
        <Button variant="contained" color="primary" onClick={handlePublish} sx={{ padding: 2, mt: 2 }}>
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Publicar
        </Button>
        
        <div>
          <strong>Artículos:</strong>
          <pre>{resultArticles}</pre>
        </div>
        <div>
          <strong>Direcciones:</strong>
          <pre>{resultAddresses}</pre>
        </div>
        <div>
          <strong>Destinatarios:</strong>
          <pre>{resultDestinations}</pre>
        </div>
    </Grid>
  );
};

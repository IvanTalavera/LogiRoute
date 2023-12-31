import { AddOutlined, MailOutline } from "@mui/icons-material"
import { IconButton, Typography } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NothingSV, NoteView } from "../views"
import { useDispatch, useSelector } from "react-redux"
import { startNewNote } from "../../store/journal"

export const JournalPage = () => {

    const dispatch = useDispatch();
    const {isSaving, active} = useSelector(state => state.journal)

    const onClickNewNote = () => {
      dispatch(startNewNote())
    }

  return (

    <JournalLayout>
      {/*<Typography>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit dolores enim harum, ad consectetur ea atque numquam odit optio, quisquam unde impedit nihil labore expedita neque iusto non nam culpa!</Typography>*/}

      {
        (!!active)
        ? <NoteView/>
        : <NothingSV/>
      }



      {/*
      <NothingSV/>
      */}
      
      {/* 
      <NoteView/>
      */} 
      <IconButton
          onClick={onClickNewNote}
          disabled = {isSaving}
          size='large'
          sx={{
            color:'white',
            backgroundColor:'error.main',
            ':hover':{backgroundColor: 'error.main', opacity:0.9},
            position: 'fixed',
            right:50,
            bottom:50
          }}
      >
        <AddOutlined sx={{fontSize:30}} />
        
      </IconButton> 
    </JournalLayout>
  )
}

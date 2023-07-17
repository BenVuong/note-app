import{mdDeleteForver} from 'react-icons/md'
const Note = () => {
    return(
        <div className="note">
            <span>Hello World, to first note</span>
            <div className="note-footer">
                <small>Note Footer goes here</small>
                <mdDeleteForver className='delete-icon' size='1.3em'/>
            </div>
        </div>
    )
};

export default Note
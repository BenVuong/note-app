import{MdDeleteForever} from 'react-icons/md'
const Note = () => {
    return(
        <div className="note">
            <span>Hello World, to first note</span>
            <div className="note-footer">
                <small>Note Footer goes here</small>
                <MdDeleteForever className='delete-icon'/>
            </div>
        </div>
    )
};

export default Note
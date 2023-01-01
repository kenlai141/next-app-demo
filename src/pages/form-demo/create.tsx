import UtilityForm from '../../components/form/UtilityForm';

const CreateUtility = () => {
  return (
    <div style={{ backgroundColor: '#FFFFFF', color: '#000000' }}>
      <h2>Create Utility Item</h2>
      <div style={{ padding: '2rem' }}>
        <UtilityForm />
      </div>
    </div>
  );
};

export default CreateUtility;

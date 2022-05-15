import React from 'react';
import {StyleSheet} from 'react-native';
import {useFormikContext} from 'formik';

import ErrorMessage from './ErrorMessage';
import ImageInputList from '../ImageInputList';

function FormImagePicker({name}) {
  const {setFieldValue, values, errors, touched} = useFormikContext();

  const imageUris = values[name];

  const handleAdd = uri => {
    setFieldValue(name, [...imageUris, uri]);
  };

  const handleRemove = uri => {
    setFieldValue(
      name,
      imageUris.filter(imageUri => imageUri !== uri),
    );
  };

  return (
    <>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default FormImagePicker;

const styles = StyleSheet.create({
  container: {},
});

import classNames from 'classnames';
import { addDays } from 'date-fns';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import { useApp } from '../../../stores/useApp';
import { useInvoice } from '../../../stores/useInvoice';
import { Filters, FormModes, PaymentTerms } from '../../../utils/constants';
import Button from '../../ui/button/Button';
import DatePicker from '../../ui/datepicker/DatePicker';
import Input from '../../ui/input/Input';
import Select from '../../ui/select/Select';
import arrowLeft from './../../../assets/images/icon-arrow-left.svg';
import plus from './../../../assets/images/icon-plus.svg';
import * as Drawer from './../../ui/drawer/Drawer';
import InputField from './InputField';
import styles from './invoice-form.module.css';
import { useEffect, useState } from 'react';

const newItem = {
  name: 'New Item',
  quantity: 1,
  price: 0.0,
  total: 0.0,
};

const defaultValues = {
  total: 0,
  status: Filters.DRAFT,
  createdAt: new Date(),
  paymentTerms: 1,
  paymentDue: addDays(new Date(), 1),
  items: [{ ...newItem }],
};

export default function InvoiceForm({ mode, invoiceId }) {
  const [open, setOpen] = useState(false);
  const isEditMode = mode === FormModes.EDIT;
  const isSmallScreen = useApp(state => state.isSmallScreen);
  const { updateInvoice, addInvoice } = useInvoice(state => state.actions);
  const invoice = useInvoice(state =>
    state.invoices.filter(invoice => invoice.id === invoiceId)
  )[0];

  const {
    register,
    control,
    handleSubmit,
    watch,
    getValues,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ...defaultValues,
      ...(invoice || {}),
    },
    shouldUnregister: true,
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'items',
    rules: {
      required: 'An item must be added',
    },
  });

  const onSubmit = () => {
    calcTotal();
    const data = getValues();
    isEditMode ? updateInvoice(data) : addInvoice(data);
    setOpen(false);
  };

  const calcTotal = () => {
    const items = getValues('items');
    const total = items.reduce(
      (sum, item) => sum + (item.quantity || 0) * (item.price || 0),
      0
    );
    setValue('total', total);
  };

  useEffect(() => {
    if (!open) {
      reset(); // Reset the form when 'open' changes to false
    }
  }, [open, reset]);

  return (
    <Drawer.Root open={open} onOpenChange={setOpen}>
      <Drawer.Trigger asChild>
        {isEditMode ? (
          <Button>Edit</Button>
        ) : (
          <Button variant="primary" className={styles.newInvoiceBtn}>
            <span aria-hidden className={styles.plus}>
              <img src={plus} alt="plus icon" aria-hidden />
            </span>
            {isSmallScreen ? 'New' : 'New Invoice'}
          </Button>
        )}
      </Drawer.Trigger>
      <Drawer.Content>
        <div className={styles.container}>
          <Drawer.Title>
            <div className={styles.title}>
              <Drawer.Close>
                <Button
                  variant="transparent"
                  type="button"
                  className={styles.backlink}
                >
                  <img
                    src={arrowLeft}
                    alt="arrow left"
                    aria-hidden
                    width={7}
                    height={10}
                  />
                  <p className="text-sm bolder">Go back</p>
                </Button>
              </Drawer.Close>
              <h2 className={'text-lg'}>
                {isEditMode ? (
                  <>
                    Edit <span className="muted highlight">#</span>
                    {invoice.id}
                  </>
                ) : (
                  <>New Invoice</>
                )}
              </h2>
            </div>
          </Drawer.Title>
          <Drawer.Description>
            <form
              noValidate
              className={styles.form}
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className={styles.formContent}>
                <fieldset className={styles.billFrom}>
                  <legend className={styles.legend}>Bill From</legend>
                  <InputField
                    label="Street Address"
                    name="senderAddress.street"
                    register={register}
                    requiredError="can't be empty"
                    errors={errors.senderAddress?.street}
                  />
                  <div className={styles.threeCol}>
                    <InputField
                      label="City"
                      name="senderAddress.city"
                      register={register}
                      requiredError="can't be empty"
                      errors={errors.senderAddress?.city}
                    />
                    <InputField
                      label="Post Code"
                      name="senderAddress.postCode"
                      register={register}
                      requiredError="can't be empty"
                      errors={errors.senderAddress?.postCode}
                    />
                    <InputField
                      label="Country"
                      name="senderAddress.country"
                      register={register}
                      requiredError="can't be empty"
                      errors={errors.senderAddress?.country}
                    />
                  </div>
                </fieldset>
                {/* <BillTo /> */}
                <fieldset className={styles.billTo}>
                  <legend className={styles.legend}>Bill To</legend>
                  <InputField
                    label="Client's Name"
                    name="clientName"
                    register={register}
                    requiredError="can't be empty"
                    errors={errors.clientName}
                  />
                  <InputField
                    label="Client's Email"
                    name="clientEmail"
                    register={register}
                    requiredError="can't be empty"
                    pattern={{
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'invalid email address',
                    }}
                    errors={errors.clientEmail}
                  />
                  <InputField
                    label="Street Address"
                    name="clientAddress.street"
                    register={register}
                    requiredError="can't be empty"
                    errors={errors.clientAddress?.street}
                  />
                  <div className={styles.threeCol}>
                    <InputField
                      label="City"
                      name="clientAddress.city"
                      register={register}
                      requiredError="can't be empty"
                      errors={errors.clientAddress?.city}
                    />
                    <InputField
                      label="Post Code"
                      name="clientAddress.postCode"
                      register={register}
                      requiredError="can't be empty"
                      errors={errors.clientAddress?.postCode}
                    />
                    <InputField
                      label="Country"
                      name="clientAddress.country"
                      register={register}
                      requiredError="can't be empty"
                      errors={errors.clientAddress?.country}
                    />
                  </div>
                </fieldset>
                {/* <InvoiceMeta /> */}
                <fieldset className={styles.invoiceMeta}>
                  <legend className="sr-only">Invoice Meta</legend>
                  <div className={styles.dates}>
                    <Controller
                      control={control}
                      name="createdAt"
                      render={({ field: { onChange, value } }) => (
                        <DatePicker
                          label="Invoice Date"
                          value={value}
                          onValueChange={value => {
                            setValue(
                              'paymentDue',
                              addDays(
                                new Date(value),
                                getValues('paymentTerms')
                              )
                            );
                            onChange(value);
                          }}
                          disabled={isEditMode}
                        />
                      )}
                    />
                    <Controller
                      control={control}
                      name="paymentTerms"
                      render={({ field: { onChange, value } }) => (
                        <Select
                          placeholder="Select Payment Terms"
                          label="Payment Terms"
                          value={value}
                          onValueChange={value => {
                            setValue(
                              'paymentDue',
                              addDays(new Date(getValues('createdAt')), value)
                            );
                            onChange(value);
                          }}
                          options={PaymentTerms}
                        />
                      )}
                    />
                  </div>
                  <InputField
                    label="Project Description"
                    name="description"
                    register={register}
                    requiredError="can't be empty"
                    errors={errors.description}
                  />
                </fieldset>
                {/* <InvoiceItems /> */}
                <fieldset className={styles.invoiceItems}>
                  <legend className={styles.legend}>Item List</legend>
                  <p className={classNames('text-sm bolder', styles.formError)}>
                    {errors.items?.root?.message}
                  </p>
                  {fields.map((field, index) => (
                    <section key={field.id} className={styles.invoiceItem}>
                      <InputField
                        label="Item Name"
                        name={`items.${index}.name`}
                        register={register}
                        requiredError="can't be empty"
                        errors={errors.items?.[index]?.name}
                      />
                      <div className={styles.fourCol}>
                        <Controller
                          control={control}
                          name={`items.${index}.quantity`}
                          rules={{ required: 'required', valueAsNumber: true }}
                          render={({ field: { onChange, value } }) => (
                            <InputField
                              label="Qty."
                              type="number"
                              name={`items.${index}.quantity`}
                              errors={errors.items?.[index]?.quantity}
                              value={value}
                              onChange={e => {
                                const quantity = Number(e.target.value) || 0;
                                setValue(
                                  `items.${index}.total`,
                                  quantity *
                                    Number(watch(`items.${index}.price`)) || 0
                                );
                                onChange(e.target.value);
                              }}
                            />
                          )}
                        />
                        <Controller
                          control={control}
                          name={`items.${index}.price`}
                          rules={{ required: 'required', valueAsNumber: true }}
                          render={({ field: { onChange, value } }) => (
                            <InputField
                              label="Price"
                              type="number"
                              name={`items.${index}.price`}
                              errors={errors.items?.[index]?.price}
                              value={value}
                              onChange={e => {
                                const price = Number(e.target.value) || 0;
                                const total =
                                  price * watch(`items.${index}.quantity`);
                                setValue(`items.${index}.total`, total);
                                onChange(e.target.value);
                              }}
                            />
                          )}
                        />
                        <Controller
                          control={control}
                          name={`items.${index}.total`}
                          render={({ field: { onChange, value } }) => (
                            <Input
                              disabled
                              label="Total"
                              type="number"
                              name="total"
                              className={styles.total}
                              value={value}
                              onChange={e => {
                                onChange(e.target.value);
                              }}
                            />
                          )}
                        />

                        <Button
                          type="button"
                          variant="transparent"
                          aria-label="Delete Item"
                          className={styles.deleteIcon}
                          onClick={() => remove(index)}
                        >
                          <svg
                            width="13"
                            height="16"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#888EB0"
                          >
                            <path
                              d="M11.583 3.556v10.666c0 .982-.795 1.778-1.777 1.778H2.694a1.777 1.777 0 01-1.777-1.778V3.556h10.666zM8.473 0l.888.889h3.111v1.778H.028V.889h3.11L4.029 0h4.444z"
                              fillRule="nonzero"
                            />
                          </svg>
                        </Button>
                      </div>
                    </section>
                  ))}
                  <Button
                    type="button"
                    className={styles.add}
                    onClick={() => append({ ...newItem })}
                  >
                    + Add New Item
                  </Button>
                </fieldset>
              </div>
              <div className={styles.formButtons}>
                {!isEditMode ? (
                  <>
                    <Drawer.Close>
                      <Button type="button">Discard</Button>
                    </Drawer.Close>
                    <Drawer.Close>
                      <Button
                        variant="dark"
                        type="button"
                        onClick={() => {
                          addInvoice(getValues());
                        }}
                      >
                        Save as Draft
                      </Button>
                    </Drawer.Close>
                    <Button variant="primary" type="submit">
                      Save & Send
                    </Button>
                  </>
                ) : (
                  <>
                    <Drawer.Close>
                      <Button type="button">Cancel</Button>
                    </Drawer.Close>
                    <Button variant="primary" type="submit">
                      Save Changes
                    </Button>
                  </>
                )}
              </div>
            </form>
          </Drawer.Description>
        </div>
      </Drawer.Content>
    </Drawer.Root>
  );
}

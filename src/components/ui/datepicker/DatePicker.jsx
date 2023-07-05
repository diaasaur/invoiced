import classNames from 'classnames';
import { format } from 'date-fns/esm';
import { useState } from 'react';
import { DayPicker, useNavigation } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { formatDate } from '../../../utils/formatters';
import Button from '../button/Button';
import * as Dropdown from '../dropdown/Dropdown';

import arrowLeft from './../../../assets/images/icon-arrow-left.svg';
import arrowRight from './../../../assets/images/icon-arrow-right.svg';
import calendar from './../../../assets/images/icon-calendar.svg';
import styles from './date-picker.module.css';

export default function DatePicker({
  value: selected,
  onValueChange,
  disabled,
  label,
}) {
  const [open, setOpen] = useState(false);

  const handleDayClick = date => {
    // ignore if the clicked date is the same as the selected date
    if (date.toDateString() === (selected && selected.toDateString())) return;
    onValueChange(date);
    setOpen(false);
  };

  return (
    <Dropdown.Root open={open} onOpenChange={setOpen}>
      <div
        className={classNames(styles.container, {
          [styles.disabled]: disabled,
        })}
      >
        <label
          htmlFor={styles.button}
          className={classNames(styles.label, 'text-sm muted highlight')}
        >
          {label}
        </label>
        <Dropdown.Trigger>
          <Button
            id={styles.button}
            variant="transparent"
            className={styles.button}
            disabled={disabled}
          >
            {formatDate(selected)}
            <img
              src={calendar}
              alt="Calendar Icon"
              aria-hidden
              width={20}
              height={25}
            />
          </Button>
        </Dropdown.Trigger>
      </div>

      <Dropdown.Content className={styles.content}>
        <DayPicker
          mode="single"
          selected={selected}
          onDayClick={handleDayClick}
          className={classNames(styles.daypicker)}
          showOutsideDays
          hideHead
          components={{
            Caption: CustomCaption,
          }}
          modifiersClassNames={{
            selected: styles.selected,
            today: styles.today,
          }}
        />
      </Dropdown.Content>
    </Dropdown.Root>
  );
}

function CustomCaption({ displayMonth }) {
  const { goToMonth, nextMonth, previousMonth } = useNavigation();
  return (
    <div className={styles.caption}>
      <Button
        className={styles.left}
        variant="transparent"
        disabled={!previousMonth}
        onClick={() => previousMonth && goToMonth(previousMonth)}
        aria-label="Go to Previous Month"
      >
        <img
          src={arrowLeft}
          alt="arrow left"
          aria-hidden
          width={7}
          height={10}
        />
      </Button>
      <p className="text-sm bolder">{format(displayMonth, 'MMM yyy')}</p>
      <Button
        className={styles.right}
        variant="transparent"
        disabled={!nextMonth}
        onClick={() => nextMonth && goToMonth(nextMonth)}
        aria-label="Go to Previous Month"
      >
        <img
          src={arrowRight}
          alt="arrow right"
          aria-hidden
          width={7}
          height={10}
        />
      </Button>
    </div>
  );
}

import Dropdown from 'react-bootstrap/Dropdown';
import cn from 'clsx';
import { useTranslation } from 'react-i18next';

const Channel = ({
  channel, activeChannelId, handleClickChannel, handleShowModal,
}) => {
  const { t } = useTranslation();

  return (
    <li className="nav-item w-100" key={channel.id}>
      {channel.removable ? (
        <Dropdown as="div" className="d-flex btn-group w-100">
          <button
            type="button"
            className={cn('w-100 rounded-0 text-start text-truncate btn', {
              'btn-secondary': channel.id === activeChannelId,
            })}
            onClick={() => handleClickChannel({ id: channel.id, name: channel.name })}
          >
            <span className="me-1">#</span>
            {channel.name}
          </button>
          <Dropdown.Toggle
            split
            variant={channel.id === activeChannelId ? 'secondary' : 'light'}
            id={`dropdown-split-${channel.id}`}
            className="flex-grow-0"
          >
            <span className="visually-hidden">Управление каналом</span>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => handleShowModal('delete', { id: channel.id })}>
              {t('delete')}
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => handleShowModal('rename', { name: channel.name, id: channel.id })}
            >
              {t('rename')}
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      ) : (
        <button
          type="button"
          className={cn('w-100 rounded-0 text-start btn text-truncate', {
            'btn-secondary': channel.id === activeChannelId,
          })}
          onClick={() => handleClickChannel({ id: channel.id, name: channel.name })}
        >
          <span className="me-1">#</span>
          {channel.name}
        </button>
      )}
    </li>
  );
};

export default Channel;

import React, { useEffect, useState } from 'react';
import api from '../services/api';

interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  location: string;
  status: string;
}

const EventList: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await api.get('/events');
        setEvents(response.data);
      } catch (error) {
        console.error('Erro ao buscar eventos', error);
        setError('Erro ao buscar eventos. Tente novamente.');
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const handleDelete = async (eventId: number) => {
    if (window.confirm('Tem certeza que deseja excluir este evento?')) {
      try {
        await api.delete(`/events/${eventId}`);
        setEvents(events.filter((event) => event.id !== eventId));
      } catch (error) {
        console.error('Erro ao excluir evento', error);
        setError('Erro ao excluir evento. Tente novamente.');
      }
    }
  };

  if (loading) return <p className="text-center">Carregando eventos...</p>;

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Meus Eventos</h1>
      {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
      {events.length === 0 ? (
        <p className="text-center">Nenhum evento encontrado.</p>
      ) : (
        <ul className="space-y-4">
          {events.map((event) => (
            <li key={event.id} className="bg-white shadow-md rounded p-4 flex justify-between items-center">
              <div>
                <h2 className="text-xl font-semibold">{event.title}</h2>
                <p className="text-sm text-gray-600">{event.description}</p>
                <p className="text-sm text-gray-600">Data: {new Date(event.date).toLocaleString()}</p>
                <p className="text-sm text-gray-600">Local: {event.location}</p>
                <p className="text-sm text-gray-600">Status: {event.status}</p>
              </div>
              <button
                onClick={() => handleDelete(event.id)}
                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
              >
                Excluir
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EventList;

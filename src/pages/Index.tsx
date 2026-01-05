import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

type Tab = 'movies' | 'music' | 'favorites' | 'profile';

const Index = () => {
  const [activeTab, setActiveTab] = useState<Tab>('movies');

  const movies = [
    { id: 1, title: 'Космический рейс', genre: 'Sci-Fi', rating: 8.9, image: 'https://cdn.poehali.dev/projects/1b6b28f3-a7d1-489a-a9fe-dbe788325073/files/df3c0e34-2d20-4b98-8cc7-bdb83e66ad31.jpg' },
    { id: 2, title: 'Неоновые огни', genre: 'Драма', rating: 9.2, image: 'https://cdn.poehali.dev/projects/1b6b28f3-a7d1-489a-a9fe-dbe788325073/files/c7b522ac-e9d0-41f0-9cea-49731f017fa1.jpg' },
    { id: 3, title: 'Звёздный путь', genre: 'Приключения', rating: 8.5, image: 'https://cdn.poehali.dev/projects/1b6b28f3-a7d1-489a-a9fe-dbe788325073/files/e25e4358-2033-47f1-a383-6f75d42ff831.jpg' },
    { id: 4, title: 'Цифровой мир', genre: 'Фантастика', rating: 9.0, image: 'https://cdn.poehali.dev/projects/1b6b28f3-a7d1-489a-a9fe-dbe788325073/files/df3c0e34-2d20-4b98-8cc7-bdb83e66ad31.jpg' },
  ];

  const music = [
    { id: 1, artist: 'Cosmic Waves', album: 'Галактика звука', gradient: 'from-purple-600 to-blue-600' },
    { id: 2, artist: 'Neon Dreams', album: 'Электрический рассвет', gradient: 'from-pink-600 to-orange-600' },
    { id: 3, artist: 'Digital Pulse', album: 'Синтетические волны', gradient: 'from-blue-600 to-cyan-500' },
    { id: 4, artist: 'Night Riders', album: 'Ночная одиссея', gradient: 'from-purple-700 to-pink-600' },
  ];

  const referralProgress = 33;
  const friendsInvited = 1;
  const friendsNeeded = 3;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A1F2C] via-[#1A1F2C] to-[#2D1B4E]">
      <div className="container mx-auto px-4 pb-24">
        <header className="pt-8 pb-6 animate-fade-in">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                StreamHub
              </h1>
              <p className="text-muted-foreground mt-1">Твой мир развлечений</p>
            </div>
            <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0 px-4 py-2 text-sm">
              Premium
            </Badge>
          </div>

          <Card className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border-purple-500/30 backdrop-blur-xl p-6 animate-scale-in">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Приведи друга</h3>
                <p className="text-sm text-purple-200">Пригласи 3 друзей и получи месяц бесплатно</p>
              </div>
              <Icon name="Gift" size={32} className="text-pink-400" />
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-purple-200">Приглашено друзей: {friendsInvited}/{friendsNeeded}</span>
                <span className="text-purple-200 font-semibold">{referralProgress}%</span>
              </div>
              <Progress value={referralProgress} className="h-2 bg-purple-900/50" />
              
              <div className="flex gap-2 mt-4">
                <Button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 border-0">
                  <Icon name="Share2" size={16} className="mr-2" />
                  Поделиться ссылкой
                </Button>
                <Button variant="outline" className="border-purple-500 text-purple-300 hover:bg-purple-500/10">
                  <Icon name="Info" size={16} />
                </Button>
              </div>
            </div>
          </Card>
        </header>

        <nav className="flex gap-2 mb-6 overflow-x-auto pb-2 animate-slide-up">
          <Button
            variant={activeTab === 'movies' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('movies')}
            className={activeTab === 'movies' ? 'bg-purple-600 hover:bg-purple-700' : 'text-muted-foreground hover:text-white'}
          >
            <Icon name="Film" size={18} className="mr-2" />
            Фильмы
          </Button>
          <Button
            variant={activeTab === 'music' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('music')}
            className={activeTab === 'music' ? 'bg-purple-600 hover:bg-purple-700' : 'text-muted-foreground hover:text-white'}
          >
            <Icon name="Music" size={18} className="mr-2" />
            Музыка
          </Button>
          <Button
            variant={activeTab === 'favorites' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('favorites')}
            className={activeTab === 'favorites' ? 'bg-purple-600 hover:bg-purple-700' : 'text-muted-foreground hover:text-white'}
          >
            <Icon name="Heart" size={18} className="mr-2" />
            Избранное
          </Button>
          <Button
            variant={activeTab === 'profile' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('profile')}
            className={activeTab === 'profile' ? 'bg-purple-600 hover:bg-purple-700' : 'text-muted-foreground hover:text-white'}
          >
            <Icon name="User" size={18} className="mr-2" />
            Профиль
          </Button>
        </nav>

        {activeTab === 'movies' && (
          <div className="space-y-4 animate-fade-in">
            <h2 className="text-2xl font-bold text-white mb-4">Популярные фильмы</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {movies.map((movie) => (
                <Card
                  key={movie.id}
                  className="group relative overflow-hidden border-0 bg-card/50 backdrop-blur-sm hover:scale-105 transition-all duration-300 cursor-pointer"
                >
                  <div className="relative h-80 flex items-end p-6">
                    <img 
                      src={movie.image} 
                      alt={movie.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 transition-all" />
                    <div className="relative z-10 w-full">
                      <Badge className="mb-2 bg-white/20 backdrop-blur-sm border-0 text-white">
                        {movie.genre}
                      </Badge>
                      <h3 className="text-xl font-bold text-white mb-1">{movie.title}</h3>
                      <div className="flex items-center gap-2">
                        <Icon name="Star" size={16} className="text-yellow-400 fill-yellow-400" />
                        <span className="text-white font-semibold">{movie.rating}</span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button size="icon" variant="secondary" className="rounded-full bg-white/90 hover:bg-white">
                      <Icon name="Play" size={20} className="text-purple-600" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'music' && (
          <div className="space-y-4 animate-fade-in">
            <h2 className="text-2xl font-bold text-white mb-4">Топ музыки</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {music.map((track) => (
                <Card
                  key={track.id}
                  className="group relative overflow-hidden border-0 bg-card/50 backdrop-blur-sm hover:scale-105 transition-all duration-300 cursor-pointer"
                >
                  <div className={`h-64 bg-gradient-to-br ${track.gradient} flex items-center justify-center`}>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all" />
                    <Icon name="Music" size={64} className="text-white/40 relative z-10" />
                  </div>
                  <div className="p-4 relative">
                    <h3 className="text-lg font-bold text-white mb-1">{track.artist}</h3>
                    <p className="text-muted-foreground text-sm">{track.album}</p>
                  </div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button size="icon" className="rounded-full w-16 h-16 bg-white hover:bg-white/90">
                      <Icon name="Play" size={24} className="text-purple-600" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'favorites' && (
          <div className="space-y-4 animate-fade-in">
            <div className="text-center py-16">
              <Icon name="Heart" size={64} className="mx-auto text-muted-foreground mb-4" />
              <h2 className="text-2xl font-bold text-white mb-2">Избранное пусто</h2>
              <p className="text-muted-foreground">Добавь свои любимые фильмы и музыку</p>
            </div>
          </div>
        )}

        {activeTab === 'profile' && (
          <div className="space-y-4 animate-fade-in">
            <Card className="bg-card/50 backdrop-blur-sm border-purple-500/20 p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                  <Icon name="User" size={40} className="text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">Пользователь</h2>
                  <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 border-0 text-white mt-1">
                    Premium подписка
                  </Badge>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Icon name="CreditCard" size={24} className="text-purple-400" />
                    <div>
                      <p className="text-white font-semibold">Подписка</p>
                      <p className="text-sm text-muted-foreground">100₽/месяц</p>
                    </div>
                  </div>
                  <Button variant="outline" className="border-purple-500 text-purple-300">
                    Управление
                  </Button>
                </div>

                <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Icon name="Users" size={24} className="text-blue-400" />
                    <div>
                      <p className="text-white font-semibold">Рефералы</p>
                      <p className="text-sm text-muted-foreground">{friendsInvited} активных друзей</p>
                    </div>
                  </div>
                  <Icon name="ChevronRight" size={20} className="text-muted-foreground" />
                </div>

                <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Icon name="Download" size={24} className="text-green-400" />
                    <div>
                      <p className="text-white font-semibold">Загрузки</p>
                      <p className="text-sm text-muted-foreground">12 элементов</p>
                    </div>
                  </div>
                  <Icon name="ChevronRight" size={20} className="text-muted-foreground" />
                </div>
              </div>
            </Card>
          </div>
        )}
      </div>

      <nav className="fixed bottom-0 left-0 right-0 bg-card/80 backdrop-blur-xl border-t border-purple-500/20 px-4 py-3">
        <div className="container mx-auto flex justify-around items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setActiveTab('movies')}
            className={activeTab === 'movies' ? 'text-purple-400' : 'text-muted-foreground'}
          >
            <Icon name="Film" size={24} />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setActiveTab('music')}
            className={activeTab === 'music' ? 'text-purple-400' : 'text-muted-foreground'}
          >
            <Icon name="Music" size={24} />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setActiveTab('favorites')}
            className={activeTab === 'favorites' ? 'text-purple-400' : 'text-muted-foreground'}
          >
            <Icon name="Heart" size={24} />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setActiveTab('profile')}
            className={activeTab === 'profile' ? 'text-purple-400' : 'text-muted-foreground'}
          >
            <Icon name="User" size={24} />
          </Button>
        </div>
      </nav>
    </div>
  );
};

export default Index;
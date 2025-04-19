'use client'

import { useQuery } from '@tanstack/react-query'
import { fetchComments, queryKeyComments } from '@/api/fetchComments'
import Image from 'next/image'
import { Comment } from '@/types/types'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'
import { Autoplay, Pagination } from 'swiper/modules'

export default function ListComments() {
  const { data: comments, isLoading } = useQuery({
    queryKey: queryKeyComments,
    queryFn: fetchComments,
  })

  if (isLoading) return <div>Loading...</div>
  if (!comments || comments.length === 0) return <div>No comments found</div>

  return (
    <div className="py-20 flex flex-col gap-10">
      <h1 className="text-center font-bold text-5xl">Comments</h1>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true, // Bullets clicáveis
        }}
        modules={[Autoplay, Pagination]}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className=" w-2/3 px-4 pb-10"
        style={{
          paddingBottom: '40px',
        }}
      >
        {comments.map((comment: Comment) => (
          <SwiperSlide key={comment.id}>
            <div className="p-4 bg-zinc-100 rounded-lg flex flex-col gap-4 h-50">
              <p className="text-gray-700 text-sm line-clamp-3">
                {comment.comment}
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <Image
                  src={comment.avatar}
                  alt={comment.name}
                  className="w-8 h-8 object-cover rounded-full"
                  width={400}
                  height={400}
                />
                <div>
                  <h2 className="text-lg font-semibold">{comment.name}</h2>
                  <p className="text-gray-700 text-sm capitalize">
                    {new Date(comment.createdAt).toLocaleDateString('pt-pt', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

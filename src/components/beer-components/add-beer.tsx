'use client'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useBeerContext } from '@/context/BeerContext'

const beerSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  description: z.string().min(1, 'Description is required'),
  abv: z.number().min(0, 'ABV must be a positive number'),
  ibu: z.number().min(0, 'IBU must be a positive number'),
  ingredients: z.string().min(1, 'Style is required'),
  country: z.string().min(1, 'Country is required'),
  createdAt: z.string().min(1, 'Date is required'),
})

type Beer = z.infer<typeof beerSchema>

export default function AddBeerForm() {
  const { addBeer } = useBeerContext()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Beer>({
    resolver: zodResolver(beerSchema),
  })

  const onSubmit = (data: Beer) => {
    const newBeer = {
      id: Date.now().toString(),
      avatar: '/beer.png',
      localbeer: true,
      ...data,
    }
    addBeer(newBeer) // Atualiza o contexto
    reset()
  }

  return (
    <div className="flex-grow p-8 flex items-center justify-center">
      <div className="rounded-lg bg-amber-50 p-8 shadow-md w-100">
        <h1 className="text-3xl font-bold text-gray-800 text-center">
          Add a New Beer
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Name Field */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium">Name</label>
            <input
              {...register('name')}
              className={`border p-3 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter beer name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Style Field */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium">Ingredients</label>
            <input
              {...register('ingredients')}
              className={`border p-3 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.ingredients ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter beer style (e.g., IPA, Lager)"
            />
            {errors.ingredients && (
              <p className="text-red-500 text-sm mt-1">
                {errors.ingredients.message}
              </p>
            )}
          </div>

          {/* ABV Field */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium">ABV (%)</label>
            <input
              type="number"
              step="0.1"
              {...register('abv', { valueAsNumber: true })}
              className={`border p-3 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.abv ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter ABV (e.g., 5.5)"
            />
            {errors.abv && (
              <p className="text-red-500 text-sm mt-1">{errors.abv.message}</p>
            )}
          </div>

          {/* IBU Field */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium">IBU</label>
            <input
              type="number"
              step="1"
              {...register('ibu', { valueAsNumber: true })}
              className={`border bg-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.ibu ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter IBU (e.g., 45)"
            />
            {errors.ibu && (
              <p className="text-red-500 text-sm mt-1">{errors.ibu.message}</p>
            )}
          </div>

          {/* Country Field */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium">Country</label>
            <input
              {...register('country')}
              className={`border p-3 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.country ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter country of origin"
            />
            {errors.country && (
              <p className="text-red-500 text-sm mt-1">
                {errors.country.message}
              </p>
            )}
          </div>

          {/* Created At Field */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium">Created At</label>
            <input
              type="date"
              {...register('createdAt')}
              className={`border p-3 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.createdAt ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.createdAt && (
              <p className="text-red-500 text-sm mt-1">
                {errors.createdAt.message}
              </p>
            )}
          </div>

          {/* Description Field */}
          <div className="flex flex-col md:col-span-2">
            <label className="text-gray-700 font-medium">Description</label>
            <textarea
              {...register('description')}
              className={`border p-3 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.description ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter beer description"
            />
            {errors.description && (
              <p className="text-red-500 text-sm mt-1">
                {errors.description.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition-all"
            >
              Add Beer
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

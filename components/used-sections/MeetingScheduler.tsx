'use client'
import { useState } from 'react'

export default function MeetingScheduler() {
	const [selectedDate, setSelectedDate] = useState<Date | null>(null)
	const [selectedTime, setSelectedTime] = useState<string>('')
	const [currentMonth, setCurrentMonth] = useState(new Date())
	const [showBookingForm, setShowBookingForm] = useState(false)
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: ''
	})

	// Available time slots - reduced for minimal design
	const timeSlots = [
		'10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM', 
		'02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
	]

	// Get calendar days with proper date handling
	const getDaysInMonth = (date: Date) => {
		const year = date.getFullYear()
		const month = date.getMonth()
		const firstDay = new Date(year, month, 1)
		const lastDay = new Date(year, month + 1, 0)
		const daysInMonth = lastDay.getDate()
		const startingDayOfWeek = firstDay.getDay()

		const days = []
		
		// Add empty cells for days before the first day of the month
		for (let i = 0; i < startingDayOfWeek; i++) {
			days.push(null)
		}
		
		// Add days of the month with proper date creation
		for (let day = 1; day <= daysInMonth; day++) {
			const currentDate = new Date(year, month, day)
			const today = new Date()
			today.setHours(0, 0, 0, 0) // Reset time for proper comparison
			currentDate.setHours(0, 0, 0, 0) // Reset time for proper comparison
			
			const isToday = currentDate.getTime() === today.getTime()
			const isPast = currentDate.getTime() < today.getTime()
			const isWeekend = currentDate.getDay() === 0 || currentDate.getDay() === 6
			
			days.push({
				day,
				date: currentDate,
				isToday,
				isPast,
				isWeekend,
				isAvailable: !isPast && !isWeekend
			})
		}
		
		return days
	}



	const handleDateSelect = (date: Date) => {
		setSelectedDate(date)
		setSelectedTime('')
		setShowBookingForm(false)
	}

	const handleTimeSelect = (time: string) => {
		setSelectedTime(time)
		setShowBookingForm(true)
	}

	const handleFormSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		
		try {
			// Send meeting details to admin via email
			const response = await fetch('/api/send-meeting-email', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					name: formData.name,
					email: formData.email,
					date: selectedDate?.toLocaleDateString(),
					time: selectedTime,
					message: formData.message
				})
			})

			const result = await response.json()

			if (result.success) {
				alert('Meeting booked successfully! Admin has been notified.')
				setShowBookingForm(false)
				setSelectedDate(null)
				setSelectedTime('')
				setFormData({ name: '', email: '', message: '' })
			} else {
				alert('Meeting booked but failed to notify admin. Please contact us directly.')
			}
		} catch (error) {
			console.error('Error submitting meeting:', error)
			alert('Error booking meeting. Please try again or contact us directly.')
		}
	}

	const nextMonth = () => {
		setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))
	}

	const prevMonth = () => {
		setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))
	}

	const days = getDaysInMonth(currentMonth)
	const monthYear = currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })

	return (
		<>
			<section className="section-meeting-scheduler py-3 dark:bg-gray-900" style={{ backgroundColor: 'var(--light-background)' }}>
				<div className="container">
					{/* Ultra Compact Header */}
					<div className="row">
						<div className="col-md-8 mx-auto text-center mb-3">
							<h5 className="fw-bold mb-1 text-dark dark:text-white" style={{ color: 'var(--dark-blue)' }}>Schedule Meeting</h5>
							<p className="text-muted dark:text-gray-400 mb-0" style={{ fontSize: '13px' }}>Pick date & time</p>
						</div>
					</div>

					{/* Main Content */}
					<div className="row justify-content-center">
						<div className="col-lg-10">
							<div className="row g-3">
								{/* Calendar */}
								<div className="col-md-6">
									<div className="card border-0 shadow-sm bg-white dark:bg-gray-800" style={{ backgroundColor: 'white' }}>
										<div className="card-header bg-transparent border-0 p-3">
											<div className="d-flex align-items-center justify-content-between">
												<h6 className="mb-0 fw-semibold text-dark dark:text-white" style={{ color: 'var(--dark-blue)', fontSize: '16px' }}>{monthYear}</h6>
												<div className="d-flex gap-2">
													<button 
													className="btn btn-gradient me-2 border-0"
													onClick={prevMonth}
													style={{ 
														width: '40px', 
														height: '40px',
														borderRadius: '50%',
														border: 'none',
														outline: 'none',
														boxShadow: 'none',
														display: 'flex',
														alignItems: 'center',
														justifyContent: 'center',
														padding: '0'
													}}
													onFocus={(e) => e.target.style.outline = 'none'}
												>
													<svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ marginLeft: '-2px' }}>
														<path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2"/>
													</svg>
												</button>
												
												<button 
													className="btn btn-gradient border-0"
													onClick={nextMonth}
													style={{ 
														width: '40px', 
														height: '40px',
														borderRadius: '50%',
														border: 'none',
														outline: 'none',
														boxShadow: 'none',
														display: 'flex',
														alignItems: 'center',
														justifyContent: 'center',
														padding: '0'
													}}
													onFocus={(e) => e.target.style.outline = 'none'}
												>
													<svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ marginLeft: '2px' }}>
														<path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2"/>
													</svg>
												</button>
												</div>
											</div>
										</div>
										
										<div className="card-body p-3 pt-0">
											{/* Day headers */}
											<div className="row text-center mb-2">
												{['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
													<div key={day} className="col">
														<small className="fw-semibold" style={{ color: 'var(--primary-color)', fontSize: '12px' }}>{day}</small>
													</div>
												))}
											</div>

											{/* Calendar days */}
											<div className="calendar-days">
												{Array.from({ length: Math.ceil(days.length / 7) }, (_, weekIndex) => (
													<div key={weekIndex} className="row mb-1">
														{days.slice(weekIndex * 7, (weekIndex + 1) * 7).map((day, dayIndex) => (
															<div key={dayIndex} className="col p-1">
																{day ? (
																	<button
																		className={`btn w-100 rounded-pill border-0 ${
																					day.isToday 
																						? '' 
																						: day.isAvailable 
																							? selectedDate?.toDateString() === day.date.toDateString()
																								? 'btn-gradient'
																								: ''
																							: ''
																				}`}
																		style={{
																			minHeight: '40px',
																			fontSize: '14px',
																			padding: '8px',
																			backgroundColor: day.isToday 
																				? '#6c757d' 
																				: day.isAvailable 
																					? selectedDate?.toDateString() === day.date.toDateString()
																						? undefined
																						: '#f8f9fa'
																					: '#e9ecef',
																			color: day.isToday 
																				? 'white' 
																				: day.isAvailable 
																					? selectedDate?.toDateString() === day.date.toDateString()
																						? 'white'
																						: '#000000'
																					: '#6c757d',
																			opacity: !day.isAvailable ? 0.6 : 1,
																			border: 'none',
																			outline: 'none',
																			boxShadow: 'none',
																			transition: 'all 0.2s ease'
																		}}
																		disabled={!day.isAvailable}
																		onClick={() => day.isAvailable && handleDateSelect(day.date)}
																		onFocus={(e) => e.target.style.outline = 'none'}
																	>
																		{day.day}
																	</button>
																) : (
																	<div style={{ minHeight: '36px' }}></div>
																)}
															</div>
														))}
													</div>
												))}
											</div>
										</div>
									</div>
								</div>

								{/* Time Slots */}
								<div className="col-md-6">
									<div className="card border-0 shadow-sm bg-white dark:bg-gray-800" style={{ backgroundColor: 'white' }}>
										<div className="card-header bg-transparent border-0 p-3">
											<h6 className="mb-0 fw-semibold" style={{ color: '#000000', fontSize: '16px' }}>
												{selectedDate ? 'Available Times' : 'Select Date'}
											</h6>
											{selectedDate && (
												<small className="text-muted dark:text-gray-400" style={{ fontSize: '13px' }}>
													{selectedDate.toLocaleDateString()}
												</small>
											)}
										</div>
										
										<div className="card-body p-3 pt-0">
											{selectedDate ? (
												<div className="time-slots">
													<div className="row g-2">
														{timeSlots.map((time, index) => (
															<div key={index} className="col-6">
																<button
																	className={`btn w-100 rounded-pill border-0 ${selectedTime === time ? 'btn-gradient' : ''}`}
																	onClick={() => handleTimeSelect(time)}
																	style={{ 
																		fontSize: '14px', 
																		padding: '12px 8px',
																		backgroundColor: selectedTime === time ? undefined : '#f8f9fa',
																		color: selectedTime === time ? 'white' : '#000000',
																		border: 'none',
																		outline: 'none',
																		boxShadow: 'none',
																		transition: 'all 0.2s ease',
																		minHeight: '44px'
																	}}
																	onFocus={(e) => e.target.style.outline = 'none'}
																>
																	{time}
																</button>
															</div>
														))}
													</div>
												</div>
											) : (
												<div className="text-center py-4">
													<svg className="text-muted dark:text-gray-400 mb-2" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
														<path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z"/>
													</svg>
													<p className="text-muted dark:text-gray-400 mb-0" style={{ fontSize: '14px' }}>Select a date first</p>
												</div>
											)}
										</div>
									</div>
								</div>
							</div>

							{/* Booking Form */}
							{showBookingForm && (
								<div className="row justify-content-center mt-3">
									<div className="col-lg-8">
										<div className="card border-0 shadow-sm bg-white dark:bg-gray-800" style={{ backgroundColor: 'white' }}>
											<div className="card-header text-white p-3" style={{ backgroundColor: 'var(--primary-color)' }}>
												<h6 className="mb-1 fw-semibold" style={{ fontSize: '16px' }}>Complete Booking</h6>
												<small style={{ fontSize: '13px' }}>{selectedDate?.toLocaleDateString()} at {selectedTime}</small>
											</div>
											
											<div className="card-body p-3">
												<form onSubmit={handleFormSubmit}>
													<div className="row g-3">
														<div className="col-md-6">
															<label className="form-label fw-semibold text-dark dark:text-white" style={{ fontSize: '14px' }}>Name *</label>
															<input
																type="text"
																className="form-control dark:bg-gray-700 dark:border-gray-600 dark:text-white"
																value={formData.name}
																onChange={(e) => setFormData({...formData, name: e.target.value})}
																required
																placeholder="Your full name"
																style={{ fontSize: '14px' }}
															/>
														</div>
														<div className="col-md-6">
															<label className="form-label fw-semibold text-dark dark:text-white" style={{ fontSize: '14px' }}>Email *</label>
															<input
																type="email"
																className="form-control dark:bg-gray-700 dark:border-gray-600 dark:text-white"
																value={formData.email}
																onChange={(e) => setFormData({...formData, email: e.target.value})}
																required
																placeholder="your@email.com"
																style={{ fontSize: '14px' }}
															/>
														</div>
														<div className="col-12">
															<label className="form-label fw-semibold text-dark dark:text-white" style={{ fontSize: '14px' }}>Message (Optional)</label>
															<textarea
																className="form-control dark:bg-gray-700 dark:border-gray-600 dark:text-white"
																rows={3}
																value={formData.message}
																onChange={(e) => setFormData({...formData, message: e.target.value})}
																placeholder="Brief description of what you'd like to discuss..."
																style={{ fontSize: '14px' }}
															></textarea>
														</div>
													</div>
													
													<div className="d-flex gap-2 justify-content-end mt-3">
														<button
															type="button"
															className="btn border-0"
															onClick={() => setShowBookingForm(false)}
															style={{ 
																fontSize: '14px',
																padding: '10px 24px',
																backgroundColor: '#f8f9fa',
																color: '#000000',
																border: 'none',
																outline: 'none',
																boxShadow: 'none',
																borderRadius: '6px',
																transition: 'all 0.2s ease'
															}}
															onFocus={(e) => e.target.style.outline = 'none'}
														>
															Cancel
														</button>
														<button
															type="submit"
															className="btn btn-gradient border-0 rounded-pill px-4 py-3"
															style={{ 
																fontSize: '14px',
																padding: '10px 24px',
																border: 'none',
																outline: 'none',
																boxShadow: 'none',
																borderRadius: '6px'
															}}
															onFocus={(e) => e.target.style.outline = 'none'}
														>
															Book Meeting
														</button>
													</div>
												</form>
											</div>
										</div>
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
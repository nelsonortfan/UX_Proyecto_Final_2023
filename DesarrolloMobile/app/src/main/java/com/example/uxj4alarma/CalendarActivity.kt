package com.example.uxj4alarma

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.CalendarView

class CalendarActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_calendar)

        val btn_cancelar: Button = findViewById(R.id.btn_cancelarCalendar)
        btn_cancelar.setOnClickListener {
            val intent_back_main = Intent(this@CalendarActivity, MainActivity::class.java)
            startActivity(intent_back_main)
        }

        val calendar_view: CalendarView = findViewById(R.id.calendarView)

        calendar_view
            .setOnDateChangeListener(
                CalendarView.OnDateChangeListener { calendarView, year, month, dayOfMonth ->
                    val date_compare = dayOfMonth
                    if (dayOfMonth != 0) {

                        val intent_list = Intent(this@CalendarActivity, ListActivity::class.java)
                        startActivity(intent_list)
                    }

                })

    }
}